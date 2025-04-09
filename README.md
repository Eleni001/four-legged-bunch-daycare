# Four Legged Bunch Daycare

## Introduktion

Detta är ett skolprojekt där man ska skapa en webbapplikation (NextJS är rekommendationen) vars funktionalitet ska testas med Cypress E2E automatiserade testar. Man ska planera och skriva ner de huvudsakliga användarflödena för applikationen och skriva automatiserade E2E tester för dessa. Det ska skrivas tester på den förväntade användningen men även på vad som sker om användaren gör fel, ex matar in felaktiga värden.

## Beskrivning

En NextJS applikation som är avsedd att för hunddagis där man kan ha koll på vilka kunder de har och ska kunna hantera sina kunder.

### Startsidan

- Här kan man hitta en lista på alla registerade hundar.
- Checka in och ut hund.
- Lägga till en ny hund.
- Clicka vidare till detaljsidan där man kan se mera information om en specifik hund.

### Detaljsidan

- Visar mer information om en specifik hund.
- Checka in och ut hund.
- Editera existerande hund information.
- Ta bort en hund.

## Installation

För att sätta upp applikationen lokalt följ nedan steg:

1. **Klona repot:**

   ```sh
   git clone https://github.com/Eleni001/four-legged-bunch-daycare.git
   cd four-legged-bunch-daycare
   ```

2. **Installera beroenden:**

   ```sh
   npm install
   ```

3. **Skapa databasen:**

   ```sh
   npm run push
   npm run seed
   ```

4. **Köra development servern:**

   ```sh
   npm run dev
   ```

## E2E-tester

1. **Skapa test databasen:**

   ```sh
    npm run test:push
   ```

2. **Köra E2E tester:**

   ```sh
    npm run test:push
   ```
