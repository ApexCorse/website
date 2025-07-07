import type { Member } from "@/types/members";

export const getMembers = async () => {
  const data = await import("../../data/members.json", {
    assert: { type: "json" },
  });
  return data.default as Member[];
};
