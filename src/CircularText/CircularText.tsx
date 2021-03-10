import Image from 'next/image';

export default function CircularText(): JSX.Element {
    return (
        <>
            <div className="circular-img-wrapper">
                <Image src="/circular.svg" alt="e" width={400} height={400} />
            </div>
        </>
    );
}
