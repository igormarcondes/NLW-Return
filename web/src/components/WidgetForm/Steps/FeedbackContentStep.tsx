import { ArrowLeft } from "phosphor-react"
import { FeedbackType, feedBackTypes } from ".."
import { CloseButton } from "../../CloseButton"

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestart: () => void;
}

export function FeedbackContentStep({ feedbackType, onFeedbackRestart } : FeedbackContentStepProps) {
    const feedBackTypeInfo = feedBackTypes[feedbackType]
    return (
        <>
        <header>
            <button 
                onClick={onFeedbackRestart}
                className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
                type="button"
            >
                <ArrowLeft weight="bold" className="w-4 h-4"/>
            </button>
            <span className="text-xl leading-6 flex items-center gap-2">
                <img className="w-6 h-6" src={feedBackTypeInfo.image.source} alt={feedBackTypeInfo.image.alt} />
                {feedBackTypeInfo.title}
            </span>
            <CloseButton></CloseButton>
        </header>
        <form className="my-4 w-full" action="">
            <textarea 
                className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none "
                placeholder="Conte com detalhes o que está acontecendo"
            />
        </form>
    </>
    )
}