import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CreateRoomRequest } from "@/components/http/types/create-room-request";
import type { CreateRoomResponse } from "@/components/http/types/create-room-response";

export function useCreateRoom() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateRoomRequest) => {
      const response = await fetch(
        "https://automatic-enigma-4vgwpwqxjxq37v6v-5000.app.github.dev/api/v1/rooms",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result: CreateRoomResponse = await response.json();

      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-rooms"],
      });
    },
  });
}
