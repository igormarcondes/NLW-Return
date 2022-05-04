import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export const feedBackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Idéia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lampada'
        }
        
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    },
}
export type FeedbackType = keyof typeof feedBackTypes

export function WidgetForm() {
    const [feedbackType, setFeedbacktype] = useState<FeedbackType | null>(null)

    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg  w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu Feedback</span>
                <CloseButton></CloseButton>
            </header>

           {!feedbackType ? (
                <FeedbackTypeStep onFeedBackTypeChange={setFeedbacktype} />
           ): (
               <p>oii</p>
           )}

            <footer className="text-xs text-neutral-400">
                Feito com &#9829; pela <a href="http:www.google.com" className="underline underline-offset-2">Rocketseat</a>
            </footer>
        </div>
    );
}