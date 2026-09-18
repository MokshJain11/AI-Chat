type StealthIconProps = {
    className?: string
}

export default function StealthIcon({ className }: StealthIconProps) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
        >
            <path
                d="M20,6S16.43,19,9.05,19c-5.64,0-6.32-3.35-6-6.23C3.45,9.61,6.35,5,10.74,5c7,0,4.35,14,10.26,14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}