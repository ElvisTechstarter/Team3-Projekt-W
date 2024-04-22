import styles from "./DatenschutzPage.module.css";

function DatenschutzPage() {
  return (
    <div className={styles.container}>
      <h1>Datenschutzerklärung</h1>

      <div className={styles.section}>
        <h2>Einleitung</h2>
        <p>
          Die Datenschutzerklärung beschreibt, wie wir Ihre personenbezogenen
          Daten erfassen, verwenden und verarbeiten, wenn Sie unsere Website
          besuchen.
        </p>
      </div>

      <div className={styles.section}>
        <h2>Verantwortlicher</h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist [Ihr
          Unternehmen], [Ihre Adresse], [Ihre Kontaktinformationen].
        </p>
      </div>

      <div className={styles.section}>
        <h2>Daten, die wir erfassen</h2>
        <p>
          Wir erfassen verschiedene Arten von Daten für verschiedene Zwecke, um
          unsere Website zu betreiben und Ihnen ein optimales Erlebnis zu
          bieten.
        </p>
        {/* Weitere Details zur Datenerfassung hier einfügen */}
      </div>

      <div className={styles.section}>
        <h2>Cookies</h2>
        <p>
          Wir verwenden Cookies und ähnliche Tracking-Technologien, um Ihre
          Aktivitäten auf unserer Website zu verfolgen und bestimmte
          Informationen zu speichern.
        </p>
        {/* Weitere Details zu Cookies hier einfügen */}
      </div>

      <div className={styles.section}>
        <h2>Rechtsgrundlage</h2>
        <p>
          Die Rechtsgrundlage für die Datenverarbeitung auf dieser Website ist
          [Rechtsgrundlage angeben].
        </p>
      </div>

      <div className={styles.section}>
        <h2>Auftragsverarbeitungsvertrag (AVV) World4You</h2>
        <p>
          Wir haben im Sinne des Artikels 28 der Datenschutz-Grundverordnung
          (DSGVO) mit World4You (World4You Internet Services GmbH, Hafenstraße
          35, 4020 Linz, Österreich) einen Auftragsverarbeitungsvertrag (AVV)
          abgeschlossen. Was ein AVV genau ist und vor allem was in einem AVV
          enthalten sein muss, können Sie in unserem allgemeinen Abschnitt
          „Auftragsverarbeitungsvertrag (AVV)“ nachlesen.
        </p>
        {/* Weitere Details zum AVV hier einfügen */}
      </div>

      <div className={styles.section}>
        <h2>Sonstiges Einleitung</h2>
        <p>Sonstiges Datenschutzerklärung Zusammenfassung</p>
      </div>

      <div className={styles.section}>
        <h2>Was fällt unter „Sonstiges“?</h2>
        <p>
          Unter die Kategorie „Sonstiges“ fallen jene Dienste, die nicht in eine
          der oben genannten Kategorien passen. Dabei handelt es sich in der
          Regel um diverse Plugins und eingebundene Elemente, die unsere Website
          verbessern. In der Regel werden diese Funktionen von Drittanbietern
          bezogen und in unsere Website eingebunden. Beispielsweise handelt es
          sich dabei um Websuch-Dienste wie Algolia Place, Giphy, Programmable
          Search Engine oder Onlinedienste für Wetterdaten wie etwa OpenWeather.
        </p>
        {/* Weitere Details zu "Sonstiges" hier einfügen */}
      </div>

      <div className={styles.section}>
        <h2>Warum verwenden wir weitere Drittanbieter?</h2>
        <p>
          Wir wollen Ihnen mit unserer Website das beste Webangebot in unserer
          Branche bieten. Schon lange ist eine Website nicht bloß eine reine
          Visitenkarte für Unternehmen. Vielmehr ist es ein Ort, der Ihnen
          behilflich sein soll, zu finden wonach Sie suchen. Um stets unsere
          Website für Sie noch interessanter und hilfreicher zu machen, nutzen
          wir diverse Dienste von Drittanbietern.
        </p>
        {/* Weitere Details zur Verwendung von Drittanbietern hier einfügen */}
      </div>

      <div className={styles.section}>
        <h2>Dauer der Datenverarbeitung</h2>
        <p>
          Über die Dauer der Datenverarbeitung informieren wir Sie weiter unten,
          sofern wir weitere Informationen dazu haben. Generell verarbeiten wir
          personenbezogene Daten nur so lange wie es für die Bereitstellung
          unserer Dienstleistungen und Produkte unbedingt notwendig ist.
        </p>
        {/* Weitere Details zur Dauer der Datenverarbeitung hier einfügen */}
      </div>

      <div className={styles.section}>
        <h2>Rechtsgrundlage</h2>
        <p>
          Wenn wir Sie um Ihre Einwilligung bitte und Sie auch einwilligen, dass
          wir den Dienst verwenden dürfen, gilt dies als Rechtsgrundlage der
          Verarbeitung Ihrer Daten (Art. 6 Abs. 1 lit. a DSGVO). Zusätzlich zur
          Einwilligung besteht von unserer Seite ein berechtigtes Interesse
          daran, das Verhalten der Websitebesucher zu analysieren und so unser
          Angebot technisch und wirtschaftlich zu verbessern. Die
          Rechtsgrundlage dafür ist Art. 6 Abs. 1 lit. f DSGVO (Berechtigte
          Interessen). Wir setzen die Tools gleichwohl nur ein, soweit Sie eine
          Einwilligung erteilt haben.
        </p>
        {/* Weitere Details zur Rechtsgrundlage hier einfügen */}
      </div>

      <div className={styles.section}>
        <h2>Commitly Datenschutzerklärung</h2>
        <p>
          Wir verwenden für unsere Website die Liquiditätsplanungs-Software
          Commitly. Dienstanbieter ist das österreichische Unternehmen Commitly
          GmbH, Dr. Clemens Pirquet-Strasse 43, 2380 Perchtoldsdorf, Österreich.
        </p>
        {/* Weitere Details zur Datenschutzerklärung von Commitly hier einfügen */}
      </div>

      <div className={styles.section}>
        <h2>Alle Texte sind urheberrechtlich geschützt.</h2>
      </div>
    </div>
  );
}

export default DatenschutzPage;
