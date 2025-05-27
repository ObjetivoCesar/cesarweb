"use client"

import { useEffect } from 'react'

export default function ChatWidget() {
  useEffect(() => {
    // Crear el contenedor del widget
    const widgetContainer = document.createElement('div')
    widgetContainer.innerHTML = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>Widget Avanzado con SSE</title>
        <style>
          /* Estilos base que pueden ser heredados */
          :root {
            --primary-color: #E89D3C;
            --secondary-color: #f0b266;
            --text-color: #333;
            --bg-color: #fff;
            --light-bg: #f9f9f9;
            --border-color: #ddd;
            --error-color: #e74c3c;
            --success-color: #27ae60;
            --warning-color: #f39c12;
            --border-radius: 10px;
            --button-radius: 50%;
            --font-family: Arial, sans-serif;
          }

          #chat-widget-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 350px;
            z-index: 9999;
            font-family: var(--font-family);
          }
          
          #chat-widget-window {
            display: none;
            flex-direction: column;
            height: 500px;
            background: var(--bg-color);
            border-radius: var(--border-radius);
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            margin-bottom: 10px;
            overflow: hidden;
          }
          
          #chat-widget-header {
            background: var(--primary-color);
            color: #fff;
            padding: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          
          #chat-widget-title { 
            font-weight: bold;
            flex: 1;
          }
          
          #chat-widget-controls {
            display: flex;
            align-items: center;
          }
          
          #chat-widget-config {
            background: transparent;
            border: none;
            color: white;
            cursor: pointer;
            font-size: 16px;
            opacity: 0.8;
            margin-right: 10px;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
          }
          
          #chat-widget-config:hover {
            opacity: 1;
          }
          
          #chat-widget-close { 
            cursor: pointer;
            font-size: 20px;
            line-height: 1;
          }
          
          #chat-widget-messages {
            flex: 1;
            padding: 15px;
            overflow-y: auto;
            background: var(--light-bg);
            display: flex;
            flex-direction: column;
          }
          
          .chat-message {
            max-width: 80%;
            padding: 10px 15px;
            margin-bottom: 10px;
            border-radius: 18px;
            word-wrap: break-word;
          }
          
          .user-message {
            align-self: flex-end;
            background: var(--primary-color);
            color: #fff;
            border-bottom-right-radius: 5px;
          }
          
          .bot-message {
            align-self: flex-start;
            background: #e8f0fe;
            color: var(--text-color);
            border-bottom-left-radius: 5px;
          }
          
          .status-message {
            align-self: center;
            background: #f1f1f1;
            color: #666;
            font-style: italic;
            font-size: 0.9em;
            padding: 5px 10px;
            border-radius: 10px;
            margin: 5px 0;
          }
          
          .error-message {
            align-self: center;
            background: #ffebee;
            color: var(--error-color);
            font-style: italic;
            font-size: 0.9em;
            padding: 5px 10px;
            border-radius: 10px;
            margin: 5px 0;
          }
          
          #chat-widget-input-container {
            display: flex;
            padding: 10px;
            border-top: 1px solid var(--border-color);
            background: var(--bg-color);
            align-items: flex-end;
          }
          
          #chat-widget-textarea-wrapper {
            flex: 1;
            position: relative;
          }
          
          #chat-widget-textarea {
            width: 100%;
            padding: 10px 15px;
            border: 1px solid var(--border-color);
            border-radius: 20px;
            outline: none;
            font-size: 14px;
            resize: none;
            max-height: 100px;
            min-height: 40px;
            overflow-y: auto;
            font-family: var(--font-family);
          }
          
          #chat-widget-actions {
            display: flex;
            margin-left: 10px;
          }
          
          .widget-action-button {
            width: 40px;
            height: 40px;
            border-radius: var(--button-radius);
            background: var(--primary-color);
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            margin-left: 5px;
          }
          
          #chat-widget-button {
            width: 60px;
            height: 60px;
            border-radius: var(--button-radius);
            background: var(--primary-color);
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            align-self: flex-end;
            font-size: 24px;
          }
          
          /* Estilos para grabación de audio */
          #chat-widget-audio-container {
            display: none;
            position: absolute;
            bottom: 70px;
            right: 20px;
            background: var(--bg-color);
            border-radius: var(--border-radius);
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            padding: 15px;
            width: 300px;
          }
          
          #chat-widget-audio-timer {
            text-align: center;
            font-size: 24px;
            margin-bottom: 10px;
            color: var(--primary-color);
          }
          
          #chat-widget-audio-controls {
            display: flex;
            justify-content: space-around;
          }
          
          .audio-control-button {
            width: 50px;
            height: 50px;
            border-radius: var(--button-radius);
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            font-size: 20px;
          }
          
          #chat-widget-audio-record {
            background: var(--error-color);
            color: white;
          }
          
          #chat-widget-audio-stop {
            background: var(--warning-color);
            color: white;
          }
          
          #chat-widget-audio-send {
            background: var(--success-color);
            color: white;
          }
          
          #chat-widget-audio-cancel {
            background: #95a5a6;
            color: white;
          }
          
          #chat-widget-audio-preview {
            margin-top: 10px;
            width: 100%;
          }
          
          .recording-pulse {
            animation: pulse 1.5s infinite;
          }
          
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
          
          /* Estilos para botones en mensajes */
          .chat-button {
            display: inline-block;
            padding: 8px 15px;
            margin: 5px 0;
            background: var(--primary-color);
            color: white;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
            transition: background 0.3s;
          }
          
          .chat-button:hover {
            background: var(--secondary-color);
          }
          
          .typing-indicator {
            display: flex;
            align-items: center;
            margin: 5px 0;
            align-self: flex-start;
          }
          
          .typing-indicator span {
            height: 8px;
            width: 8px;
            margin: 0 1px;
            background-color: #9E9E9E;
            display: block;
            border-radius: 50%;
            opacity: 0.4;
          }
          
          .typing-indicator span:nth-of-type(1) {
            animation: 1s blink infinite 0.3333s;
          }
          
          .typing-indicator span:nth-of-type(2) {
            animation: 1s blink infinite 0.6666s;
          }
          
          .typing-indicator span:nth-of-type(3) {
            animation: 1s blink infinite 0.9999s;
          }
          
          @keyframes blink {
            50% {
              opacity: 1;
            }
          }

          /* Estilos para Markdown */
          .bot-message strong, .bot-message b {
            font-weight: bold;
          }
          
          .bot-message em, .bot-message i {
            font-style: italic;
          }
          
          .bot-message code {
            font-family: monospace;
            background: rgba(0,0,0,0.05);
            padding: 2px 4px;
            border-radius: 3px;
          }
          
          .bot-message pre {
            background: rgba(0,0,0,0.05);
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
            font-family: monospace;
          }
          
          .bot-message ul, .bot-message ol {
            padding-left: 20px;
            margin: 5px 0;
          }
          
          .bot-message blockquote {
            border-left: 3px solid var(--primary-color);
            padding-left: 10px;
            margin-left: 5px;
            color: #666;
          }
          
          /* Configuración de colores */
          #chat-widget-config-panel {
            display: none;
            position: absolute;
            top: 50px;
            right: 10px;
            background: white;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            padding: 15px;
            z-index: 10000;
            width: 250px;
          }
          
          .config-group {
            margin-bottom: 10px;
          }
          
          .config-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            font-size: 12px;
          }
          
          .config-group input {
            width: 100%;
            padding: 5px;
            border: 1px solid #ddd;
            border-radius: 3px;
          }
          
          .config-actions {
            display: flex;
            justify-content: space-between;
            margin-top: 15px;
          }
          
          .config-button {
            padding: 5px 10px;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            font-size: 12px;
          }
          
          .config-save {
            background: var(--primary-color);
            color: white;
          }
          
          .config-reset {
            background: #f1f1f1;
            color: #333;
          }
          
          /* Estilos para la conexión */
          .connection-status {
            position: absolute;
            top: 5px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 10px;
            padding: 2px 5px;
            border-radius: 10px;
            background: rgba(0,0,0,0.1);
            color: white;
            opacity: 0.7;
            display: none;
          }
          
          .connection-status.online {
            background: var(--success-color);
          }
          
          .connection-status.offline {
            background: var(--error-color);
          }
          
          .connection-status.connecting {
            background: var(--warning-color);
          }
          
          /* Tooltip para errores */
          .error-tooltip {
            position: relative;
            display: inline-block;
            margin-left: 5px;
            cursor: help;
          }
          
          .error-tooltip .tooltip-text {
            visibility: hidden;
            width: 200px;
            background-color: #555;
            color: #fff;
            text-align: center;
            border-radius: 6px;
            padding: 5px;
            position: absolute;
            z-index: 1;
            bottom: 125%;
            left: 50%;
            margin-left: -100px;
            opacity: 0;
            transition: opacity 0.3s;
            font-size: 12px;
            font-style: normal;
          }
          
          .error-tooltip:hover .tooltip-text {
            visibility: visible;
            opacity: 1;
          }
        </style>
      </head>
      <body>
        <div id="chat-widget-container">
          <div id="chat-widget-window">
            <div id="chat-widget-header">
              <span id="chat-widget-title">Asistente Virtual</span>
              <div id="chat-widget-controls">
                <button id="chat-widget-config">⚙️</button>
                <span id="chat-widget-close">&times;</span>
              </div>
              <div id="connection-status" class="connection-status">Conectando...</div>
            </div>
            <div id="chat-widget-messages"></div>
            <div id="chat-widget-input-container">
              <div id="chat-widget-textarea-wrapper">
                <textarea id="chat-widget-textarea" placeholder="Escribe un mensaje..." rows="1"></textarea>
              </div>
              <div id="chat-widget-actions">
                <div id="chat-widget-mic" class="widget-action-button">🎤</div>
                <div id="chat-widget-send" class="widget-action-button">➤</div>
              </div>
            </div>
          </div>
          <div id="chat-widget-button">💬</div>
          
          <!-- Contenedor para grabación de audio -->
          <div id="chat-widget-audio-container">
            <div id="chat-widget-audio-timer">00:00</div>
            <div id="chat-widget-audio-controls">
              <div id="chat-widget-audio-record" class="audio-control-button">⏺</div>
              <div id="chat-widget-audio-stop" class="audio-control-button" style="display:none">⏹</div>
              <div id="chat-widget-audio-send" class="audio-control-button" style="display:none">✓</div>
              <div id="chat-widget-audio-cancel" class="audio-control-button">✕</div>
            </div>
            <audio id="chat-widget-audio-preview" controls style="display:none"></audio>
          </div>
          
          <!-- Panel de configuración -->
          <div id="chat-widget-config-panel">
            <div class="config-group">
              <label for="config-primary-color">Color Principal</label>
              <input type="color" id="config-primary-color" value="#E89D3C">
            </div>
            <div class="config-group">
              <label for="config-title">Título del Widget</label>
              <input type="text" id="config-title" value="Asistente Virtual">
            </div>
            <div class="config-group">
              <label for="config-welcome">Mensaje de Bienvenida</label>
              <input type="text" id="config-welcome" value="¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte?">
            </div>
            <div class="config-actions">
              <button class="config-button config-reset">Restablecer</button>
              <button class="config-button config-save">Guardar</button>
            </div>
          </div>
        </div>
      </body>
      </html>
    `

    // Añadir el widget al DOM
    document.body.appendChild(widgetContainer)

    // Inicializar el widget
    const script = document.createElement('script')
    script.textContent = `
      (function() {
        // Configuración del widget
        const widgetConfig = {
          apiUrl: 'https://chat-aggregator-backend-v2.onrender.com/webhook',
          title: 'Asistente Virtual',
          welcomeMessage: '¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte?',
          maxAudioDuration: 60,
          primaryColor: '#E89D3C',
          secondaryColor: '#f0b266',
          maxRetries: 3,
          retryDelay: 2000
        };
        
        // Elementos del DOM
        const elements = {
          container: document.getElementById('chat-widget-container'),
          button: document.getElementById('chat-widget-button'),
          window: document.getElementById('chat-widget-window'),
          header: document.getElementById('chat-widget-header'),
          title: document.getElementById('chat-widget-title'),
          close: document.getElementById('chat-widget-close'),
          messages: document.getElementById('chat-widget-messages'),
          textarea: document.getElementById('chat-widget-textarea'),
          send: document.getElementById('chat-widget-send'),
          mic: document.getElementById('chat-widget-mic'),
          audioContainer: document.getElementById('chat-widget-audio-container'),
          audioTimer: document.getElementById('chat-widget-audio-timer'),
          audioRecord: document.getElementById('chat-widget-audio-record'),
          audioStop: document.getElementById('chat-widget-audio-stop'),
          audioSend: document.getElementById('chat-widget-audio-send'),
          audioCancel: document.getElementById('chat-widget-audio-cancel'),
          audioPreview: document.getElementById('chat-widget-audio-preview'),
          config: document.getElementById('chat-widget-config'),
          configPanel: document.getElementById('chat-widget-config-panel'),
          configPrimaryColor: document.getElementById('config-primary-color'),
          configTitle: document.getElementById('config-title'),
          configWelcome: document.getElementById('config-welcome'),
          configSave: document.querySelector('.config-save'),
          configReset: document.querySelector('.config-reset'),
          connectionStatus: document.getElementById('connection-status')
        };

        // Inicializar el widget
        function initWidget() {
          // Personalizar título
          elements.title.textContent = widgetConfig.title;
          
          // Mostrar mensaje de bienvenida
          addBotMessage(widgetConfig.welcomeMessage);
          
          // Event listeners
          elements.button.addEventListener('click', () => {
            elements.window.style.display = 'flex';
            elements.button.style.display = 'none';
          });
          
          elements.close.addEventListener('click', () => {
            elements.window.style.display = 'none';
            elements.button.style.display = 'flex';
          });
          
          elements.send.addEventListener('click', () => {
            sendTextMessage(elements.textarea.value);
          });
          
          elements.textarea.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              sendTextMessage(elements.textarea.value);
            }
          });
        }

        // Función para añadir mensaje del bot
        function addBotMessage(message) {
          const msg = document.createElement('div');
          msg.className = 'chat-message bot-message';
          msg.textContent = message;
          elements.messages.appendChild(msg);
          elements.messages.scrollTop = elements.messages.scrollHeight;
        }

        // Función para enviar mensaje de texto
        function sendTextMessage(text) {
          if (!text.trim()) return;
          
          const msg = document.createElement('div');
          msg.className = 'chat-message user-message';
          msg.textContent = text;
          elements.messages.appendChild(msg);
          
          elements.textarea.value = '';
          elements.messages.scrollTop = elements.messages.scrollHeight;
        }

        // Iniciar widget
        initWidget();
      })();
    `

    document.body.appendChild(script)

    // Limpiar al desmontar
    return () => {
      document.body.removeChild(widgetContainer)
      document.body.removeChild(script)
    }
  }, [])

  return null
} 