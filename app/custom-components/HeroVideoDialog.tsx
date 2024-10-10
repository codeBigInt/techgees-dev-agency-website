import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export function HeroVideoDialogDemo() {
    return (
        <div className="relative">
            <HeroVideoDialog
                className="dark:hidden block"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                thumbnailSrc="https://img.youtube.com/vi/NN7YEIlc-Oc/maxresdefault.jpg"
                thumbnailAlt="Hero Video"
            />
            <HeroVideoDialog
                className="hidden dark:block"
                animationStyle="from-center"
                videoSrc="https://youtu.be/NN7YEIlc-Oc?si=fawSOGN5iAFv0UFh"
                thumbnailSrc="https://img.youtube.com/vi/NN7YEIlc-Oc/maxresdefault.jpg"
                thumbnailAlt="Hero Video"
            />
        </div>
    );
}
