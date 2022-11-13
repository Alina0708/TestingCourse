export class Actions {
    visit(url) {
        return driver.get(url);
    }

    quit = function() {
        return driver.quit();
    }
}