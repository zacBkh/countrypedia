interface CloseButtonProps {
    onButtonClick: () => void
}

const CloseButton: React.FC<CloseButtonProps> = ({ onButtonClick }) => {
    return (
        <button
            onClick={onButtonClick}
            className="text-[#99A1B3] rounded-full hover:!bg-transparent active:transform-none"
            title="Delete searched content"
        >
            <span className="sr-only">Delete search</span>

            <svg
                className={`mr-3 align-middle text-[#99A1B3] shrink-0`}
                width="18px"
                height="18px"
                viewBox="0 0 20 20"
            >
                <path
                    d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z"
                    stroke="currentColor"
                    fill="none"
                    fillRule="evenodd"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
            </svg>
        </button>
    )
}

export default CloseButton
