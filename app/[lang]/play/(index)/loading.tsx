import Spinner from '@/components/ui/spinner'

const Loading = () => {
    return (
        <div className="flex flex-wrap justify-center items-center gap-4 h-screen sm:h-[40vw]">
            <p className="text-xl font-semibold">Loading your games...</p>
            <Spinner moreCSS="border-t-react-blue-txt-light&dark !w-10 !h-10" />
        </div>
    )
}

export default Loading
