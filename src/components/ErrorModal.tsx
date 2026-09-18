type ErrorModalProps = {
    onClose: () => void
}

export default function ErrorModal({ onClose }: ErrorModalProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">

            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">

                <h2 className="text-xl font-semibold text-gray-800">
                    Model unavailable
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                    This model isn't available for free chat.
                    Please select another model to continue.
                </p>

                <div className="mt-6 flex justify-end">
                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-lg bg-[rgb(162,59,103)] px-4 py-2 text-sm font-semibold text-white hover:bg-[#d56698]"
                    >
                        Okay
                    </button>
                </div>

            </div>
        </div>
    )
}