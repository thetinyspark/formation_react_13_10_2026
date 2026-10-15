import { readFile } from "fs/promises";
import path from "path";
import type { Product } from "./types";

/**
 * Charge le catalogue côté serveur.
 * En RSC, on peut lire le système de fichiers directement
 * (pas de fetch côté client nécessaire).
 */
export async function getCatalog(): Promise<Product[]> {
  const filePath = path.join(process.cwd(), "data", "catalog.json");
  const raw = await readFile(filePath, "utf-8");
  const catalog: Product[] = JSON.parse(raw);

  // Normalise les chemins d'images pour Next.js (public/)
  return catalog.map((p) => ({
    ...p,
    img: p.img.startsWith("/") ? p.img : `/${p.img.replace(/^\.\//, "")}`,
  }));
}

export async function getProductById(id: number): Promise<Product | null> {
  const catalog = await getCatalog();
  return catalog.find((p) => p.id === id) ?? null;
}

export async function getPlatforms(): Promise<string[]> {
  const catalog = await getCatalog();
  const platforms = Array.from(new Set(catalog.map((p) => p.platform)));
  return ["All", ...platforms];
}
