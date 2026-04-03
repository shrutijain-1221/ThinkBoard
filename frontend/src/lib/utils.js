export function formatData(date) {
  if (!date) return "No date";

  const d = new Date(date);

  if (isNaN(d)) return "Invalid date";

  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}