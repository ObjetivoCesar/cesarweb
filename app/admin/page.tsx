'use client';
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
// import { getAllArticles } from "@/lib/utils";

const tabs = [
  { id: "imagenes", label: "Imágenes" },
  { id: "videos", label: "Videos" },
  { id: "articulos", label: "Artículos" },
  { id: "gestion", label: "Editar/Eliminar" },
  { id: "estadisticas", label: "Estadísticas" },
];

function ImagenUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [alt, setAlt] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setUrl("");
      setCopied(false);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("alt", alt);
    formData.append("title", title);
    // Llamada a la API para subir la imagen
    const res = await fetch("/api/upload-image", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (data.url) {
      setUrl(data.url);
      setCopied(false);
    }
  };

  const handleCopy = () => {
    if (url) {
      const markdown = `![${alt || "Texto alternativo"}](${url} \"${title || "Título de la imagen"}\")`;
      navigator.clipboard.writeText(markdown);
      setCopied(true);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#111111] file:text-white hover:file:bg-black"
      />
      <input
        type="text"
        placeholder="Texto alternativo (alt)"
        value={alt}
        onChange={e => setAlt(e.target.value)}
        className="px-4 py-2 rounded bg-[#111111] border border-[#111111] text-white focus:outline-none"
      />
      <input
        type="text"
        placeholder="Título de la imagen"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="px-4 py-2 rounded bg-[#111111] border border-[#111111] text-white focus:outline-none"
      />
      <button
        onClick={handleUpload}
        disabled={!file}
        className="bg-white text-[#111111] font-bold py-2 rounded-full mt-2 hover:bg-[#e5e5e5] transition-colors disabled:opacity-50"
      >
        Subir imagen
      </button>
      {url && (
        <div className="mt-4 flex flex-col gap-2">
          <span className="text-green-400">¡Imagen subida!</span>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={url}
              readOnly
              className="px-2 py-1 rounded bg-[#111111] border border-[#111111] text-white w-full"
            />
            <button onClick={handleCopy} className="bg-[#111111] px-3 py-1 rounded text-white font-semibold hover:bg-black">
              {copied ? "Copiado" : "Copiar"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function VideoUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState("");
  const [youtube, setYoutube] = useState("");
  const [embed, setEmbed] = useState("");
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setUrl("");
      setEmbed("");
      setCopied(false);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    // Llamada a la API para subir el video
    const res = await fetch("/api/upload-video", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (data.url) {
      setUrl(data.url);
      setEmbed(`<video controls src=\"${data.url}\" style=\"max-width:100%\"></video>`);
      setCopied(false);
    }
  };

  const handleYoutube = () => {
    if (!youtube) return;
    // Extraer el ID del video de YouTube
    const match = youtube.match(/(?:youtu.be\/|youtube.com\/(?:watch\?v=|embed\/|v\/|shorts\/)?)([\w-]{11})/);
    if (match && match[1]) {
      const id = match[1];
      const code = `<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/${id}\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>`;
      setEmbed(code);
      setUrl("");
      setCopied(false);
    } else {
      setEmbed("");
      setUrl("");
      setCopied(false);
    }
  };

  const handleCopy = () => {
    if (embed) {
      if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(embed);
        setCopied(true);
      }
    } else if (url) {
      if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url);
        setCopied(true);
      }
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <label className="font-semibold">Subir archivo de video</label>
      <input
        type="file"
        accept="video/*"
        ref={inputRef}
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#111111] file:text-white hover:file:bg-black"
      />
      <button
        onClick={handleUpload}
        disabled={!file}
        className="bg-white text-[#111111] font-bold py-2 rounded-full mt-2 hover:bg-[#e5e5e5] transition-colors disabled:opacity-50"
      >
        Subir video
      </button>
      <label className="font-semibold mt-4">O pegar enlace de YouTube</label>
      <input
        type="text"
        placeholder="https://www.youtube.com/watch?v=..."
        value={youtube}
        onChange={e => setYoutube(e.target.value)}
        className="px-4 py-2 rounded bg-[#111111] border border-[#111111] text-white focus:outline-none"
      />
      <button
        onClick={handleYoutube}
        disabled={!youtube}
        className="bg-white text-[#111111] font-bold py-2 rounded-full mt-2 hover:bg-[#e5e5e5] transition-colors disabled:opacity-50"
      >
        Generar embed
      </button>
      {(embed || url) && (
        <div className="mt-4 flex flex-col gap-2">
          <span className="text-green-400">¡Código listo para usar!</span>
          <textarea
            value={embed || url}
            readOnly
            className="px-2 py-1 rounded bg-[#111111] border border-[#111111] text-white w-full min-h-[80px]"
          />
          <button onClick={handleCopy} className="bg-[#111111] px-3 py-1 rounded text-white font-semibold hover:bg-black">
            {copied ? "Copiado" : "Copiar"}
          </button>
        </div>
      )}
    </div>
  );
}

function ImageSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [copiedUrl, setCopiedUrl] = useState("");

  const searchImages = async (q: string) => {
    const res = await fetch("/api/images-meta");
    const images = await res.json();
    const filtered = images.filter((img: any) =>
      img.title?.toLowerCase().includes(q.toLowerCase()) ||
      img.alt?.toLowerCase().includes(q.toLowerCase())
    );
    setResults(filtered);
  };

  useEffect(() => {
    if (query.length > 1) {
      searchImages(query);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleCopy = (img: any) => {
    const markdown = `![${img.alt || "Texto alternativo"}](${img.url} \"${img.title || "Título de la imagen"}\")`;
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(markdown);
      setCopiedUrl(img.url);
      setTimeout(() => setCopiedUrl("") , 2000);
    }
  };

  return (
    <div className="mb-6">
      <label className="block font-semibold mb-2">Buscar imágenes ya subidas</label>
      <input
        type="text"
        placeholder="Buscar por título o alt..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="px-4 py-2 rounded bg-[#111111] border border-[#111111] text-white focus:outline-none w-full mb-4"
      />
      {results.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {results.map((img, idx) => (
            <div key={idx} className="bg-[#111111] rounded-lg p-2 flex flex-col items-center">
              <img src={img.url} alt={img.alt} className="w-full h-32 object-contain mb-2" />
              <div className="text-xs text-gray-300 mb-1">{img.title}</div>
              <button
                onClick={() => handleCopy(img)}
                className="bg-[#111111] px-2 py-1 rounded text-white text-xs font-semibold hover:bg-black"
              >
                {copiedUrl === img.url ? "Copiado" : "Copiar URL"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ArticleEditor() {
  const [yaml, setYaml] = useState('---\ntitle: ""\ndate: ""\nauthor: ""\ntags: []\nexcerpt: ""\nimage: ""\n---');
  const [content, setContent] = useState("");
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  const [successUrl, setSuccessUrl] = useState("");

  useEffect(() => {
    const savedYaml = localStorage.getItem("admin-article-yaml");
    const savedContent = localStorage.getItem("admin-article-content");
    if (savedYaml) setYaml(savedYaml);
    if (savedContent) setContent(savedContent);
  }, []);
  useEffect(() => {
    localStorage.setItem("admin-article-yaml", yaml);
    localStorage.setItem("admin-article-content", content);
  }, [yaml, content]);

  const handleCopy = () => {
    const markdown = `${yaml}\n\n${content}`;
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSave = async () => {
    setError("");
    setSuccessUrl("");
    const markdown = `${yaml}\n\n${content}`;
    const res = await fetch("/api/save-article", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ markdown }),
    });
    const data = await res.json();
    if (res.ok && data.url) {
      setSaved(true);
      setSuccessUrl(data.url);
      setTimeout(() => setSaved(false), 2000);
    } else {
      setError(data.error || "Error al guardar el artículo. Verifica el encabezado YAML.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="flex-1 flex flex-col gap-4 min-w-[400px] max-w-[700px]">
        <ImageSearch />
        <label className="font-semibold">Encabezado YAML (metadatos)</label>
        <textarea
          value={yaml}
          onChange={e => setYaml(e.target.value)}
          placeholder="Pega aquí el bloque YAML (metadatos)"
          className="w-full min-h-[140px] px-4 py-2 rounded bg-[#111111] border border-[#111111] text-white focus:outline-none text-lg"
        />
        <label className="font-semibold">Contenido del artículo (Markdown)</label>
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Pega aquí el contenido del artículo en Markdown"
          className="w-full min-h-[350px] px-4 py-2 rounded bg-[#111111] border border-[#111111] text-white focus:outline-none text-lg"
        />
        <div className="flex gap-2 flex-wrap">
          <button onClick={handleCopy} className="bg-[#111111] px-3 py-1 rounded text-white font-semibold hover:bg-black">
            {copied ? "Copiado" : "Copiar Markdown"}
          </button>
          <button onClick={handleSave} className="bg-white text-[#111111] font-bold py-1 px-4 rounded-full hover:bg-[#e5e5e5] transition-colors">
            Guardar y publicar
          </button>
          {saved && <span className="text-green-400 ml-2">¡Artículo guardado!</span>}
          {successUrl && (
            <span className="text-blue-400 ml-2">URL: <a href={successUrl} target="_blank" rel="noopener noreferrer" className="underline">{successUrl}</a></span>
          )}
          {error && <span className="text-red-400 ml-2">{error}</span>}
        </div>
        {validateYAML(yaml).length > 0 && (
          <ul className="text-red-400 text-sm mt-2">
            {validateYAML(yaml).map((err, idx) => (
              <li key={idx}>• {err}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex-1 bg-[#111111] rounded-lg p-4 border border-[#111111] overflow-auto min-w-[400px] max-w-[700px]">
        <h3 className="text-lg font-bold mb-2">Previsualización</h3>
        <div className="prose prose-invert max-w-none text-lg">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{`${yaml}\n\n${content}`}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

function validateYAML(yaml: string) {
  const errors: string[] = [];
  const match = yaml.match(/^---([\s\S]*?)---/);
  if (!match) {
    errors.push("Falta el bloque de encabezado YAML (debe comenzar y terminar con ---)");
    return errors;
  }
  const y = match[1];
  if (!/title:/.test(y)) errors.push("Falta el campo 'title' en el encabezado YAML");
  if (!/date:/.test(y)) errors.push("Falta el campo 'date' en el encabezado YAML");
  if (!/author:/.test(y)) errors.push("Falta el campo 'author' en el encabezado YAML");
  if (!/image:/.test(y)) errors.push("Falta el campo 'image' en el encabezado YAML");
  if (!/excerpt:/.test(y)) errors.push("Falta el campo 'excerpt' en el encabezado YAML");
  if (!/tags:/.test(y)) errors.push("Falta el campo 'tags' en el encabezado YAML");
  return errors;
}

function ArticleManager() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState("");

  useEffect(() => {
    async function fetchArticles() {
      try {
        const res = await fetch("/api/admin-articles");
        const data = await res.json();
        setArticles(data);
      } catch (e) {
        setError("No se pudieron cargar los artículos");
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, []);

  const handleDelete = async (category: string, slug: string) => {
    if (!window.confirm("¿Seguro que deseas eliminar este artículo? Esta acción no se puede deshacer.")) return;
    try {
      const res = await fetch("/api/delete-article", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category, slug })
      });
      const data = await res.json();
      if (data.success) {
        setArticles(articles.filter(a => !(a.category === category && a.slug === slug)));
      } else {
        alert("No se pudo eliminar el artículo");
      }
    } catch {
      alert("Error al eliminar el artículo");
    }
  };

  const handleSendNewsletter = async (art: any) => {
    setNewsletterStatus("");
    try {
      const res = await fetch("/api/send-newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: art.title,
          excerpt: art.excerpt,
          category: art.category,
          slug: art.slug,
        })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setNewsletterStatus(`✅ Newsletter enviado: ${data.message}`);
      } else {
        setNewsletterStatus(`❌ Error: ${data.error || "No se pudo enviar el newsletter"}`);
      }
    } catch (e) {
      setNewsletterStatus("❌ Error al enviar el newsletter");
    }
    setTimeout(() => setNewsletterStatus(""), 6000);
  };

  if (loading) return <div className="text-gray-400">Cargando artículos...</div>;
  if (error) return <div className="text-red-400">{error}</div>;
  if (articles.length === 0) return <div className="text-gray-400">No hay artículos publicados.</div>;

  return (
    <div className="overflow-x-auto">
      {newsletterStatus && <div className="mb-4 text-center font-bold text-lg" style={{color: newsletterStatus.startsWith("✅") ? '#27ae60' : '#e74c3c'}}>{newsletterStatus}</div>}
      <table className="min-w-full text-sm">
        <thead>
          <tr className="bg-[#111111]">
            <th className="p-2 text-left">Título</th>
            <th className="p-2 text-left">Categoría</th>
            <th className="p-2 text-left">Fecha</th>
            <th className="p-2 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((art, idx) => (
            <tr key={idx} className="border-b border-[#4a3b33]">
              <td className="p-2">{art.title}</td>
              <td className="p-2">{art.category}</td>
              <td className="p-2">{art.date}</td>
              <td className="p-2 flex gap-2 flex-wrap">
                <a href={`/blog/${art.category}/${art.slug}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Ver</a>
                <button className="text-red-400 underline" onClick={() => handleDelete(art.category, art.slug)}>Eliminar</button>
                <button className="text-green-400 underline font-bold" onClick={() => handleSendNewsletter(art)}>Enviar newsletter</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface Visita {
  fecha: string;
  pagina: string;
  visitas: number;
}

interface Estadisticas {
  totalVisitas: number;
  visitasHoy: number;
  articulosPublicados: number;
  suscriptoresNewsletter: number;
  ultimasVisitas: Visita[];
  aperturasEmail: {
    [key: string]: {
      email: string;
      aperturas: number;
      ultimaApertura: string | null;
    };
  };
}

function StatisticsPanel() {
  const [stats, setStats] = useState<Estadisticas>({
    totalVisitas: 0,
    visitasHoy: 0,
    articulosPublicados: 0,
    suscriptoresNewsletter: 0,
    ultimasVisitas: [],
    aperturasEmail: {}
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/statistics');
        if (response.ok) {
          const data = await response.json();
          setStats(data);
        }
      } catch (error) {
        console.error('Error al cargar estadísticas:', error);
      }
    };

    fetchStats();
    // Actualizar cada 5 minutos
    const interval = setInterval(fetchStats, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Calcular tasa de apertura
  const calcularTasaApertura = () => {
    const aperturas = Object.values(stats.aperturasEmail || {});
    if (aperturas.length === 0) return 0;
    
    const totalAperturas = aperturas.reduce((acc: number, curr: any) => acc + curr.aperturas, 0);
    const totalEmails = aperturas.length;
    
    return ((totalAperturas / totalEmails) * 100).toFixed(1);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-[#4a3b33] p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Total Visitas</h3>
        <p className="text-2xl font-bold">{stats.totalVisitas}</p>
      </div>
      <div className="bg-[#4a3b33] p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Visitas Hoy</h3>
        <p className="text-2xl font-bold">{stats.visitasHoy}</p>
      </div>
      <div className="bg-[#4a3b33] p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Artículos Publicados</h3>
        <p className="text-2xl font-bold">{stats.articulosPublicados}</p>
      </div>
      <div className="bg-[#4a3b33] p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Suscriptores Newsletter</h3>
        <p className="text-2xl font-bold">{stats.suscriptoresNewsletter}</p>
      </div>

      <div className="col-span-full bg-[#4a3b33] p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Estadísticas de Email</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-md font-semibold mb-2">Tasa de Apertura</h4>
            <p className="text-2xl font-bold">{calcularTasaApertura()}%</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-2">Últimas Aperturas</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="text-left p-2">Email</th>
                    <th className="text-left p-2">Aperturas</th>
                    <th className="text-left p-2">Última Apertura</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(stats.aperturasEmail || {}).map(([id, data]: [string, any]) => (
                    <tr key={id} className="border-t border-[#5a463a]">
                      <td className="p-2">{data.email}</td>
                      <td className="p-2">{data.aperturas}</td>
                      <td className="p-2">{data.ultimaApertura ? new Date(data.ultimaApertura).toLocaleString() : 'Nunca'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-full bg-[#4a3b33] p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Últimas Visitas</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left p-2">Fecha</th>
                <th className="text-left p-2">Página</th>
                <th className="text-left p-2">Visitas</th>
              </tr>
            </thead>
            <tbody>
              {stats.ultimasVisitas.map((visita: any, idx) => (
                <tr key={idx} className="border-t border-[#5a463a]">
                  <td className="p-2">{visita.fecha}</td>
                  <td className="p-2">{visita.pagina}</td>
                  <td className="p-2">{visita.visitas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("imagenes");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  // Limpiar localStorage al cerrar sesión
  useEffect(() => {
    if (!isLoggedIn) {
      localStorage.removeItem("admin-article-draft");
    }
  }, [isLoggedIn]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (user === "admin" && pass === "123") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#2d2420] text-white flex flex-col items-center justify-center py-12">
        <div className="w-full max-w-sm rounded-lg shadow-lg bg-[#3a2f29] p-8">
          <h1 className="text-3xl font-bold mb-8 text-center font-serif">Acceso al Panel</h1>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Usuario"
              value={user}
              onChange={e => setUser(e.target.value)}
              className="px-4 py-2 rounded bg-[#111111] border border-[#111111] text-white focus:outline-none"
              autoFocus
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={pass}
              onChange={e => setPass(e.target.value)}
              className="px-4 py-2 rounded bg-[#111111] border border-[#111111] text-white focus:outline-none"
            />
            {error && <div className="text-red-400 text-sm text-center">{error}</div>}
            <button type="submit" className="bg-white text-[#111111] font-bold py-2 rounded-full mt-2 hover:bg-[#e5e5e5] transition-colors">Entrar</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#2d2420] text-white flex flex-col items-center py-12">
      <div className="w-full max-w-6xl rounded-lg shadow-lg bg-[#3a2f29] p-8">
        <h1 className="text-3xl font-bold mb-8 text-center font-serif">Panel de Administración</h1>
        <div className="flex justify-center mb-8 gap-4 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 rounded-full font-semibold transition-colors duration-200 ${activeTab === tab.id ? "bg-white text-[#111111]" : "bg-[#2d2420] text-white hover:bg-[#4a3b33]"}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="bg-[#111111] rounded-lg p-6 min-h-[300px]">
          {activeTab === "imagenes" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Gestión de Imágenes</h2>
              <p className="text-gray-300 mb-4">Aquí podrás subir imágenes, agregar metadatos y obtener la URL interna para usarlas en tus artículos.</p>
              <ImagenUploader />
            </div>
          )}
          {activeTab === "videos" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Gestión de Videos</h2>
              <p className="text-gray-300">Aquí podrás subir videos o pegar enlaces de YouTube y obtener el código embed listo para tus artículos.</p>
              <VideoUploader />
            </div>
          )}
          {activeTab === "articulos" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Crear Artículo</h2>
              <p className="text-gray-300">Aquí podrás crear y previsualizar tus artículos en Markdown antes de publicarlos.</p>
              <ArticleEditor />
            </div>
          )}
          {activeTab === "gestion" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Editar o Eliminar Artículos</h2>
              <p className="text-gray-300">Aquí podrás ver, editar o eliminar artículos ya publicados.</p>
              <ArticleManager />
            </div>
          )}
          {activeTab === "estadisticas" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Estadísticas del Sitio</h2>
              <p className="text-gray-300 mb-4">Aquí podrás ver las estadísticas de visitas y el rendimiento del sitio.</p>
              <StatisticsPanel />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}