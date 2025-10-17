const fs = require('fs');
const path = require('path');

const clientHeaderPath = path.join(__dirname, 'components', 'ClientHeader.tsx');
const newContent = `"use client";
import Header from "@/app/components/Header";

export default function ClientHeader() {
  return <Header />;
}`;

fs.writeFileSync(clientHeaderPath, newContent, 'utf-8');
console.log('ClientHeader actualizado correctamente');
