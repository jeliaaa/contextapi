import React from 'react'
import dictionary from '../dictionary.json'
import { useLanguage } from '../LanguageContext';
const Body = () => {
    const { language, changeLanguage } = useLanguage();
    return (
        <div>
            <div>
                {language === 'en' ?
                    dictionary.en.hello
                    :
                    dictionary.ge.hello
                }
            </div>
            <div>
                {language === 'en' ?
                    dictionary.en.goodbye
                    :
                    dictionary.ge.goodbye
                }
            </div>

        </div>
    )
}

export default Body