import { useState } from "react"
import { videos } from "../data/home"

export function VideosSection() {
    const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
    return (
        <div className="pt-4 px-4 pb-24 grid gap-4 md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
        {videos.map((video) => (
            <div className="relative" key={video.id} onMouseEnter={() => setHoveredVideo(video.id)} onMouseLeave={() => setHoveredVideo(null)}>
            <div className="relative">
                <img
                    src={video.thumbnailUrl}
                    alt=""
                    className={`${hoveredVideo === video.id ? "opacity-0" : "opacity-1"} duration-300 rounded-xl`}
                />
                <p className=" bg-zinc-700 text-white absolute right-1 bottom-2 rounded-md text-sm px-0.5">{VideoDuration(video.duration)}</p>
            </div>
            <video
                src={video.videoUrl}
                className={`${hoveredVideo === video.id ? "opacity-1" : "opacity-0"} duration-300 absolute w-full h-auto top-0 left-0`}
            ></video>
            <div className="flex mt-4">
                <div className="mr-2">
                <img
                    src={video.channel.profileUrl}
                    alt=""
                    className="w-12 rounded-full"
                />
                </div>
                <div>
                    <p className="font-bold">{video.title}</p>
                    <p className="text-sm text-slate-400">{video.channel.name}</p>
                    <div className="text-sm text-slate-400">
                        <span>{formatViews(video.views)} • </span>
                        <span>{timeAgo(video.postedAt)}</span>
                    </div>
                </div>
            </div>
            </div>
        ))}
        </div>
    );
}

const formatViews = (views: number) => {
    if (views >= 1000000) {
        return (views / 1000000).toFixed(1) + 'M Views';
    } else if (views >= 1000) {
        return (views / 1000).toFixed(1) + 'K Views';
    } else {
        return views + ' Views';
    }
};

const timeAgo = (postedAt: Date) => {
    const currentDate = new Date();
    const postedDate = new Date(postedAt);
    const timeDifference = currentDate.getTime() - postedDate.getTime();
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);
    if (years > 0) {
        return `${years} ${years === 1 ? 'year' : 'years'} ago`;
    } else if (months > 0) {
        return `${months} ${months === 1 ? 'month' : 'months'} ago`;
    } else if (days > 0) {
        return `${days} ${days === 1 ? 'day' : 'days'} ago`;
    } else if (hours > 0) {
        return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    } else if (minutes > 0) {
        return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    } else {
        return `${seconds} ${seconds === 1 ? 'second' : 'seconds'} ago`;
    }
};

const VideoDuration = ( duration: number) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};
