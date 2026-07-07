import { Link } from 'react-router-dom';
import type { Channel } from '../types';
import { useAppStore, formatCount } from '../store/useAppStore';

export default function StreamerCard({ channel }: { channel: Channel }) {
  const isFollowed = useAppStore((s) => s.isFollowed);
  const toggleFollow = useAppStore((s) => s.toggleFollow);
  const followed = isFollowed(channel.id);

  return (
    <div className="streamer-card">
      <Link
        to={`/channel/${channel.id}`}
        className={`avatar ${channel.isLive ? 'on' : ''} ${channel.avatarTone}`}
        aria-label={`${channel.displayName} 채널로 이동`}
      />
      <h4>{channel.displayName}</h4>
      <p>{channel.game} · {formatCount(channel.followers)}</p>
      <button
        className={`follow ${followed ? 'on' : ''}`}
        onClick={() => toggleFollow(channel.id)}
      >
        {followed ? '팔로잉' : '+ 팔로우'}
      </button>
    </div>
  );
}
