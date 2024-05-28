"use client";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { AlbumArtwork } from "./album-artwork";
import { listenNowAlbums } from "@/data/albums";

const CustomerFeedback = () => {
    return (
        <div className="rounded-3xl p-4 bg-gradient-to-r from-rose-600 to-red-700">
            <div className="flex items-center justify-between ">
                <div className="space-y-1">
                    <h2 className="text-2xl font-bold tracking-tight text-white">
                        Cảm ơn HÀNG NGÀN người nổi tiếng cùng HÀNG TRIỆU khách
                        hàng đã và đang ủng hộ My Phone .
                    </h2>
                </div>
            </div>
            {/* <Separator className="my-4" /> */}
            <div className="relative">
                <ScrollArea>
                    <div className="flex space-x-4 p-4 ">
                        {listenNowAlbums.map((album) => (
                            <AlbumArtwork
                                key={album.name}
                                album={album}
                                className="w-[250px]"
                                aspectRatio="portrait"
                                width={250}
                                height={330}
                            />
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>
        </div>
    );
};

export default CustomerFeedback;
