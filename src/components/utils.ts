export function formatCapturedAt(value: Date) {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(value);
}

export function formatLabel(value: string) {
  return value.toLowerCase().replaceAll("_", " ");
}

export function excerpt(text: string, maxLength = 240) {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength).trimEnd()}...`;
}
