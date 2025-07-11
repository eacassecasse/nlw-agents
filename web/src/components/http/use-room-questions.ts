import { useQuery } from "@tanstack/react-query";
import type { GetRoomQuestionsResponse } from "@/components/http/types/get-room-questions-response";

export function useRoomQuestions(roomId: string) {
  return useQuery({
    queryKey: ["get-questions", roomId],
    queryFn: async () => {
      const response = await fetch(
        `https://automatic-enigma-4vgwpwqxjxq37v6v-5000.app.github.dev/api/v1/rooms/${roomId}/questions`
      );
      const result: GetRoomQuestionsResponse = await response.json();

      return result;
    },
  });
}
