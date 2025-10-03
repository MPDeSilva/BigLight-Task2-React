export function readPageData(): any {
  const el = document.getElementById('page-data');
  try {
    return el ? JSON.parse(el.textContent || '{}') : { modules: [] };
  } catch {
    return { modules: [] };
  }
}
