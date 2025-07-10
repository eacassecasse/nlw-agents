import { useQuery } from "@tanstack/react-query";
import type { GetRoomsResponse } from "@/components/http/types/get-rooms-response";

export function useRooms() {
  return useQuery({
    queryKey: ["get-rooms"],
    queryFn: async () => {
      const response = await fetch(
        "https://automatic-enigma-4vgwpwqxjxq37v6v-5000.app.github.dev/api/v1/rooms"
      );
      const result: GetRoomsResponse = await response.json();

      return result;
    },
  });
}
