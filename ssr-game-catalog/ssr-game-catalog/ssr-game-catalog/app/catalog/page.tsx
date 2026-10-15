import { getCatalog, getPlatforms } from "@/lib/catalog";
import Catalog from "@/components/Catalog";
import type { Product } from "@/lib/types";

type SearchParams = {
  name?: string;
  platform?: string;
  minPrice?: string;
  maxPrice?: string;
};

/**
 * Filtrage côté serveur via searchParams (URL).
 * Les filtres sont soumis par un formulaire HTML classique (GET).
 *
 */
function filterCatalog(
  catalog: Product[],
  params: SearchParams
): Product[] {
  let result = catalog;

  if (params.platform && params.platform !== "All") {
    result = result.filter((p) => p.platform === params.platform);
  }

  if (params.name) {
    const q = params.name.toLowerCase();
    result = result.filter((p) => p.name.toLowerCase().includes(q));
  }

  if (params.minPrice) {
    const min = Number(params.minPrice);
    if (!Number.isNaN(min)) {
      result = result.filter((p) => p.price >= min);
    }
  }

  if (params.maxPrice) {
    const max = Number(params.maxPrice);
    if (!Number.isNaN(max)) {
      result = result.filter((p) => p.price <= max);
    }
  }

  return result;
}

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const [catalog, platforms] = await Promise.all([
    getCatalog(),
    getPlatforms(),
  ]);

  const filtered = filterCatalog(catalog, params);

  return (
    <>
      <h2>Catalogue</h2>
      <form className="filters" method="get" action="/catalog">
        <label>
          Nom
          <input
            type="text"
            name="name"
            defaultValue={params.name ?? ""}
            placeholder="Rechercher…"
          />
        </label>

        <label>
          Plateforme
          <select name="platform" defaultValue={params.platform ?? "All"}>
            {platforms.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </label>

        <label>
          Prix min
          <input
            type="number"
            name="minPrice"
            min={0}
            step={0.01}
            defaultValue={params.minPrice ?? ""}
            placeholder="0"
          />
        </label>

        <label>
          Prix max
          <input
            type="number"
            name="maxPrice"
            min={0}
            step={0.01}
            defaultValue={params.maxPrice ?? ""}
            placeholder="100"
          />
        </label>

        <button type="submit">Filtrer</button>
      </form>

      <p>
        {filtered.length} jeu{filtered.length > 1 ? "x" : ""} trouvé
        {filtered.length > 1 ? "s" : ""}
      </p>

      <Catalog catalog={filtered} />
    </>
  );
}
