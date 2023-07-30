interface CloseButtonProps {
    onButtonClick: () => void
    moreCSSSvg?: string
}

const CloseButton: React.FC<CloseButtonProps> = ({ onButtonClick, moreCSSSvg }) => {
    return (
        <button
            onClick={onButtonClick}
            className="text-[#99A1B3] rounded-full hover:!bg-transparent active:transform-none"
            title="Delete searched content"
        >
            <span className="sr-only">Delete search</span>

            <svg
                className={`${moreCSSSvg}`}
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
