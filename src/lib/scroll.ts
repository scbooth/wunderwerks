export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export const navLinks = [
  { label: "Story", id: "story" },
  { label: "Compliance Board", id: "compliance" },
  { label: "Tap List", id: "tap-list" },
  { label: "Events", id: "events" },
] as const;
