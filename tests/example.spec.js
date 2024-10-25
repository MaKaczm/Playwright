
// Importowanie modułów z Playwright
const { test, expect } = require('@playwright/test');

test('Test głównej strony Alior Bank', async ({ page }) => {

  // 1. Przejdź do strony głównej Alior Banku
  await page.goto('https://www.aliorbank.pl/');
  
  // 2. Sprawdź, czy tytuł strony jest poprawny
  await expect(page).toHaveTitle(/Alior Bank/);

  // 3. Sprawdź obecność elementu menu głównego
  const mainMenu = await page.locator('img[alt="Alior Bank"]');
  await expect(mainMenu).toBeVisible(); // Sprawdzenie widoczności menu
  
  // 4. Przetestuj kliknięcie w opcję "Otwórz konto" w menu
  await page.click('text=Otwórz konto'); // Kliknięcie w "Otwórz konto"
  
  // 5. Sprawdź, czy pojawił się formularz logowania
  const accountAplication = await page.locator('text=Wniosek o Konto Jakże Osobiste'); // Identyfikacja formularza
  await expect(accountAplication).toBeVisible(); // Sprawdzenie widoczności formularza
  
  // 6. Wprowadz Imie  
  await page.fill('[name="firstName"]', 'Janek');
  
  // 7. Kliknij w link "Kontakt" i sprawdź, czy otwiera się strona kontaktowa
  await footerLink.click(); // Kliknięcie w link "Kontakt"
  await expect(page).toHaveURL(/kontakt/); // Sprawdzenie URL strony kontaktowej
  
  // 8. Wróć na stronę główną i sprawdź widoczność głównego banera
  await page.goto('https://www.aliorbank.pl/');
  const mainBanner = await page.locator('div.banner'); // Identyfikacja głównego banera
  await expect(mainBanner).toBeVisible(); // Sprawdzenie widoczności banera
  
  // 9. Zweryfikuj obecność przycisku "Sprawdź ofertę"
  const offerButton = await page.locator('text=Sprawdź ofertę');
  await expect(offerButton).toBeVisible(); // Sprawdzenie widoczności przycisku "Sprawdź ofertę"
  
  // 10. Kliknij przycisk "Sprawdź ofertę" i sprawdź, czy otwiera odpowiednią sekcję
  await offerButton.click();
  const offerSection = await page.locator('section#offerSection');
  await expect(offerSection).toBeVisible(); // Sprawdzenie widoczności sekcji ofertowej

});
