export const navLinks = [
  { label: "Story", id: "story" },
  { label: "Wells Street", id: "compliance" },
  { label: "On Tap", id: "tap-list" },
  { label: "Traditions", id: "events" },
  { label: "Fort Wayne", id: "fort-wayne" },
] as const;

export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth", block: "start" });
}
