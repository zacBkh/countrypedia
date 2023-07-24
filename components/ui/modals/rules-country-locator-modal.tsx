import { AiOutlineClose } from 'react-icons/ai'

import { useGlobalContext } from '@/app/context/store'

import { MODAL_TITLE_FONT_SIZE, MODAL_BODY_FONT_SIZE } from '@/constants/responsive-fonts'

import Button from '../buttons'

const RulesCountryLocatorModal = ({}) => {
    const { modalsCtx } = useGlobalContext()

    const shouldCloseModal = (evt: any) => {
        const shouldTriggerModalClose = evt.target.hasAttribute('close-modal')
        if (shouldTriggerModalClose) {
            closeModal()
        }
    }

    const closeModal = () => {
        modalsCtx.countryLocatorRules.toggleModalState()
    }

    return (
        <>
            <div
                close-modal="true"
                onClick={shouldCloseModal}
                className="transition-modal z-[99999] overflow-hidden text-form-color centerModalWrapper overlay"
            >
                <div className="relative bg-white dark:bg-[#23272F] rounded-lg shadow centerAbsoluteContent w-[80%] md:w-[50%] ">
                    {/* <button
                        aria-label="Close modal"
                        onClick={closeModal}
                        type="button"
                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                    >
                        <AiOutlineClose className="w-5 h-5" />
                    </button> */}
                    <div className="p-6 text-center flex flex-col gap-y-8">
                        <h1 className={`${MODAL_TITLE_FONT_SIZE} font-semibold`}>
                            Are you ready to play? 🤯
                        </h1>
                        <div
                            className={`${MODAL_BODY_FONT_SIZE} font-semibold flex flex-col gap-y-2 items-start`}
                        >
                            <div>
                                👉🏼 A randomly chosen country will appear at the top of the
                                page
                            </div>
                            <div>
                                👉🏼 Try to locate this country on the map and click as fast
                                as possible!
                            </div>
                            <div>👉🏼 Each correct answers will bring you one point</div>
                        </div>

                        <Button
                            onAction={closeModal}
                            ariaLabel="Click to start the game."
                            text="Let's go! 💪🏼"
                            moreStyle={'w-fit mx-auto !text-base'}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default RulesCountryLocatorModal
