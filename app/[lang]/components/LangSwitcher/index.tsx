"use client";
import React, { useState } from "react";
import styles from "./languageSwitcher.module.scss";

type Language = "EN" | "RU" | "HY";

interface IProps {
    boxStyles?: string
}

const LanguageSwitcher: React.FC<IProps> = ({ boxStyles }) => {
    const [open, setOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState<Language>("EN");

    const languages: Language[] = ["EN", "RU", "HY"];

    const handleChange = (lang: Language) => {
        setCurrentLang(lang);
        setOpen(false);
        // 👉 here you can connect with i18n.changeLanguage(lang)
    };

    return (
        <div
            className={`${styles.switcher} ${boxStyles}`}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <button
                className={styles.toggle}
                onClick={() => setOpen((prev) => !prev)}
            >
                <img
                    src="/img/svg/globe.svg"
                    alt={"dictionary.navigation.search"}
                    width={20}
                    height={20}
                />
                <span className={styles.current}>{currentLang}</span>
            </button>

            <ul className={`${styles.dropdown} ${open ? styles.open : ""}`}>
                {languages.map((lang) => (
                    <li
                        key={lang}
                        onClick={() => handleChange(lang)}
                        className={`${styles.item} ${currentLang === lang ? styles.active : ""
                            }`}
                    >
                        <span>{lang}</span>
                        {currentLang !== lang
                            &&
                            <div className={styles.dropdownHighlight}></div>
                        }
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LanguageSwitcher;
