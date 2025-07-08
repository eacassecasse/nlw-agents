import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

type GetRoomsApiResponse = Array<{ id: string; name: string }>;

export function CreateRoom() {
  const { data, isLoading } = useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch(
        'https://automatic-enigma-4vgwpwqxjxq37v6v-5000.app.github.dev/api/v1/rooms'
      );
      const result: GetRoomsApiResponse = await response.json();

      return result;
    },
  });
  return (
    <div>
      <div>Create Room</div>
      {isLoading && <p>Carregando...</p>}
      <div className="flex flex-col gap-1">
        {!isLoading &&
          data?.map((room) => {
            return (
              <Link key={room.id} to={`/room/${room.id}`}>
                {room.name}
              </Link>
            );
          })}
      </div>
      <Link className="underline" to="/room">
        Acessar Sala
      </Link>
    </div>
  );
}
