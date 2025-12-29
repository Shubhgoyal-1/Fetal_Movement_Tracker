export const formatSessionDate = (timestamp: number) => {
  return new Date(timestamp).toLocaleDateString("en-IN", {
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).replace(",", " ·");
};
