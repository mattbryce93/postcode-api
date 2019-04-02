class App {

  constructor () {
    this.mountRoutes();
  }

  public sum (a: number, b: number): string {
    return `${a + b}`;
  }

  private mountRoutes (): void {
    const sum = 1 + 1;
  }
}

export default new App;