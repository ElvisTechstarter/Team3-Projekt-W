import styles from "./ImpressumPage.module.css";

function ImpressumPage() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.impressum}>Impressum </div> <br />
      <div className={styles.tmg}>Angabe nach § 5 TMG </div>
      <br />
      <div className={styles.textfeld}>
        jeddebook gGmbh <br />
        Pariser Platz 1 <br />
        10117 Berlin <br />
        <br />
        Tel: 030 / 813 37 81 0 <br />
        E-mail: contact@jeddebook.org <br />
        Registergericht: Amtsgericht Berlin-Mitte
        <br />
        Handelsregister: 09 HRB 18601
        <br />
        Ust-ID: DE 000 111 999
        <br />
        <br />
        Vertreten durch: Herr Dr. Max Power
        <br />
        Gesellschafter: Stiftung jeddebook Lichtenstein
        <br />
        Bergstraße 1, 9490 Vaduz
      </div>{" "}
      <br />
      <div className={styles.belehrung}>
        Datenschutz
        <br />
        Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name,
        Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies soweit
        möglich stets auf freiwilliger Basis. Die Nutzung der Angebote und
        Dienste ist, soweit möglich, stets ohne Angabe personenbezogener Daten
        möglich. Wir weisen darauf hin, dass die Datenübertragung im Internet
        (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen
        kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
        nicht möglich.Der Nutzung von im Rahmen der Impressumspflicht
        veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht
        ausdrücklich angeforderter Werbung und Informationsmaterialien wird
        hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten
        sich ausdrücklich rechtliche S Die Betreiber der Seiten behalten sich
        ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von
        Werbeinformationen, etwa durch Spam-Mails, vor.
        <br />
        Weitere Hinweise zum Datenschutz finden Sie in unserer
        Datenschutzerklärung.
      </div>
    </div>
  );
}

export default ImpressumPage;
