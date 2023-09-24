import { FC } from 'react'

import { AiOutlineClose } from 'react-icons/ai'

import { useSWRConfig } from 'swr'

import { useGlobalContext } from '@/app/context/store'

import { MODAL_TITLE_FONT_SIZE, MODAL_BODY_FONT_SIZE } from '@/constants/responsive-fonts'

import Button from '../buttons'

import { DifficultyLvl } from '@/app/context/store'

import Divider from '../divider'

import SWR_KEYS from '@/constants/SWR-keys'

import sleep from '@/utils/sleep'

import { TradGameTypes } from '@/components/play/capital-guesser'

interface RulesCapitalGuesserModalType {
    tradModals: TradGameTypes['tradModals']
}

const RulesCapitalGuesserModal: FC<RulesCapitalGuesserModalType> = ({ tradModals }) => {
    const {
        common: {
            title,
            paragraph1,
            point_correct_answer,
            easy_level,
            hard_level,
            info_current_level,
        },
        capital_guesser_modal,
    } = tradModals

    const { mutate } = useSWRConfig()

    const { modalsCtx } = useGlobalContext()

    const shouldCloseModal = (evt: any) => {
        const shouldTriggerModalClose = evt.target.hasAttribute('close-modal')
        if (shouldTriggerModalClose) {
            closeModal()
        }
    }

    const closeModal = () => {
        modalsCtx.capitalGuesserRules.toggleModalState()
    }

    const startGame = async (lvlChosen: DifficultyLvl) => {
        if (lvlChosen !== modalsCtx.capitalGuesserRules.difficultyLevel) {
            modalsCtx.capitalGuesserRules.setDifficultyLvl(lvlChosen)
            await sleep(50) // get the latest updated ctx API value
            mutate(SWR_KEYS.RANDOM_COUNTRY_CAPITAL)
        }
        closeModal()
    }

    const ariaLabelAndTitle = {
        easy: 'Start the game with an easy level - approx. 60 common countries.',
        hard: 'Start the game with a hard level - 250 countries, including the most exotic ones!',
    }

    const currentLvl = modalsCtx.capitalGuesserRules.difficultyLevel

    return (
        <>
            <dialog
                close-modal="true"
                onClick={shouldCloseModal}
                className="transition-modal z-[99999] overflow-hidden text-form-color centerModalWrapper overlay"
            >
                <div className="relative bg-white dark:bg-[#23272F] rounded-lg shadow centerAbsoluteContent w-[80%] md:w-[50%] ">
                    <button
                        aria-label="Close modal"
                        onClick={closeModal}
                        type="button"
                        className="absolute top-2 right-2 dark:text-white text-black bg-transparent hover:bg-gray-200  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                    >
                        <AiOutlineClose className="w-5 h-5" />
                    </button>
                    <div className="p-6 text-center flex flex-col gap-y-8">
                        <h1 className={`${MODAL_TITLE_FONT_SIZE} font-semibold`}>
                            {title}
                        </h1>
                        <div
                            className={`${MODAL_BODY_FONT_SIZE} font-semibold flex flex-col gap-y-2 items-start`}
                        >
                            <div>{paragraph1}</div>
                            <div>{capital_guesser_modal.paragraph2}</div>
                            <div>{point_correct_answer}</div>
                        </div>

                        <Divider moreCSS="w-[65%] mx-auto" />
                        <div>
                            <p className="italic">
                                {info_current_level}
                                <span className="text-[#087da4] dark:text-[#149eca] font-bold">
                                    {' '}
                                    {currentLvl}{' '}
                                </span>
                                level
                            </p>
                        </div>

                        <div className="flex justify-between items-center">
                            <Button
                                onAction={() => startGame(DifficultyLvl.EASY)}
                                ariaLabel={ariaLabelAndTitle.easy}
                                title={ariaLabelAndTitle.easy}
                                text={easy_level}
                                textSm="Easy 😎"
                                moreStyle={'w-fit mx-auto !text-base'}
                            />
                            <Button
                                onAction={() => startGame(DifficultyLvl.HARD)}
                                ariaLabel={ariaLabelAndTitle.hard}
                                title={ariaLabelAndTitle.hard}
                                text={hard_level}
                                textSm="Hard 💪🏼"
                                moreStyle={'w-fit mx-auto !text-base'}
                            />
                        </div>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default RulesCapitalGuesserModal
