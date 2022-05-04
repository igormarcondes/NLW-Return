import { FeedbackType, feedBackTypes } from ".."

interface FeedbackTypeStepProps {
    onFeedBackTypeChange: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({onFeedBackTypeChange} : FeedbackTypeStepProps) {
    return (
        <div className="flex py-8 gap-2 w-full">
                {Object.entries(feedBackTypes).map(([key, value]) =>{
                    return (
                        <button
                            key={key}
                            className="bg-zinc-800 rounded-lg py-5 flex-1 w-24 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                            onClick={ () => onFeedBackTypeChange(key as FeedbackType) }
                            type="button"
                        >
                            <img src={value.image.source} alt={value.image.source} />
                            <span>{value.title}</span>
                        </button>
                    )
                })}
        </div>
    )
}