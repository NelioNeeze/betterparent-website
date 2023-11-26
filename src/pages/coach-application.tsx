import { TextField, Button } from "@mui/material";
import type { NextPage } from "next";
import styles from "../styles/index.module.css";
import formStyles from "../styles/coach-application.module.css";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import stylesHero from "../styles/coach-detail.module.css";
import { useState } from "react";
import { sendApplication } from "../services/applicationService";

const CoachApplication: NextPage = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");

    const [applicationSent, setApplicationSent] = useState(false);

    const handleFormSubmit = (e: any) => {
        e.preventDefault();

        const formData = {
            data: {
                name,
                email,
                phone: parseInt(phoneNumber),
                message,
            }
        };

        sendApplication(formData)
        setApplicationSent(true)
    };

    
    return (
        <div className={styles.homepage}>
            <Navbar/>
            <div className={stylesHero.image44Parent}>
                <img className={stylesHero.image44Icon} 
                    alt="" 
                    src='/coach-application-hero.png' 
                />
                <div className={stylesHero.natalieSchrderParent}>
                    <b className={stylesHero.natalieSchrder}>Coaching leicht gemacht</b>
                    <div className={stylesHero.meinNameIstContainer}>
                        <p className={stylesHero.meinNameIst}>
                        Keine Lust mehr dich über eigene Kanäle zu vermarkten? Dann werde Teil unseres Teams und erhalte viele verschiedene Vorteile.
                        Wir erleichtern euch den Alltag, indem wir dafür Sorgen, dass Kunden auf euch aufmerksam werden und bei euch Kurse buchen. Von eurer Seite wird hier keinerlei technische Expertise erwartet, sondern ihr könnt all eure Inhalte ganz einfach über unsere komfortable Benutzeroberfäche eintragen.
                        </p>
                    </div>
                </div>
            </div>

            <div className={stylesHero.image44Parent}>
                <div className={stylesHero.natalieSchrderParent}>
                    <b className={stylesHero.natalieSchrder}>Eigenes Anmeldeportal</b>
                    <div className={stylesHero.meinNameIstContainer}>
                        <p className={stylesHero.meinNameIst}>
                        Seid ihr Teil unseres Team, so bekommt ihr Zugriff auf under Verwaltungsportal für Coaches.
                        Hier könnt ihr eure gebuchten Termine einsehen und verwalten und euch mit euren Kunden austauschen. Zudem könnt ihr hier ganz einfach euer Profil, eure Kurse und eure Blog-Artikel bearbeiten.
                        </p>
                    </div>
                </div>
                <img className={stylesHero.image44Icon} 
                    alt="" 
                    src='/coach-application-screenshot.png' 
                />
            </div>

            <div className={stylesHero.image44Parent}>
                <div className={stylesHero.natalieSchrderParent}>
                    <b className={stylesHero.natalieSchrder}>Eigenes Anmeldeportal</b>
                    <div className={stylesHero.meinNameIstContainer}>
                        <p className={stylesHero.meinNameIst}>
                        Seid ihr Teil unseres Team, so bekommt ihr Zugriff auf under Verwaltungsportal für Coaches.
                        Hier könnt ihr eure gebuchten Termine einsehen und verwalten und euch mit euren Kunden austauschen. Zudem könnt ihr hier ganz einfach euer Profil, eure Kurse und eure Blog-Artikel bearbeiten.
                        </p>
                    </div>
                </div>
                {!applicationSent && (
                    <form onSubmit={handleFormSubmit} className={formStyles.form}>
                        <TextField
                            fullWidth
                            label="Dein Name"
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            label="E-Mail"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            label="Telefonnummer"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            inputProps={{
                                pattern: '[0-9]*', // Use a regular expression pattern to allow only numbers
                            }}
                        />
                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            label="Deine Nachricht"
                            value={message}
                            required
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <Button variant="contained" className={formStyles.button} type="submit">
                            Absenden
                        </Button>
                    </form>
                )}
                {applicationSent && (
                    <p>Vielen Dank für deine Bewerbung</p>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default CoachApplication;




