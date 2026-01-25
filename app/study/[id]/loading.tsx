import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans pb-20">
            <div className="bg-white border-b border-slate-200 py-8">
                <div className="container mx-auto px-4 space-y-4">
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-12 w-3/4" />
                    <Skeleton className="h-6 w-1/2" />
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <Skeleton className="h-64 w-full rounded-xl" />
                        <Skeleton className="h-96 w-full rounded-xl" />
                    </div>
                    <div className="lg:col-span-1">
                        <Skeleton className="h-80 w-full rounded-xl" />
                    </div>
                </div>
            </div>
        </div>
    );
}
