type OthersIconProps = {
    className?: string
}

export default function OthersIcon({ className }: OthersIconProps) {
    return (
        <svg
            className={className}
            viewBox="13 13 75 75"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
        >
            <path
                d="M50.5,15.9995
                C31.477,15.9995 16,31.4765 16,50.4995
                C16,69.5235 31.477,84.9995 50.5,84.9995
                C69.523,84.9995 85,69.5235 85,50.4995
                C85,31.4765 69.523,15.9995 50.5,15.9995
                M50.5,87.9995
                C29.822,87.9995 13,71.1775 13,50.4995
                C13,29.8225 29.822,12.9995 50.5,12.9995
                C71.178,12.9995 88,29.8225 88,50.4995
                C88,71.1775 71.178,87.9995 50.5,87.9995"
            />

            <circle cx="32.7537" cy="50.133" r="3.85714" />
            <circle cx="50.133" cy="50.133" r="3.85714" />
            <circle cx="67.5123" cy="50.133" r="3.85714" />
        </svg>
    )
}