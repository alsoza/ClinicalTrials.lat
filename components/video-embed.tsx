export function VideoEmbed({ videoId }: { videoId: string }) {
    if (!videoId) return null;

    return (
        <div className="relative w-full overflow-hidden rounded-xl shadow-lg bg-black aspect-video mb-8">
            <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="Study Video"
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
}
