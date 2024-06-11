

class SoftAssertions {
    private errors: { message: string, screenshot?: string }[] = [];

    addError(message: string, screenshot?: string) {
        this.errors.push({ message, screenshot });
    }

    getErrors(): { message: string, screenshot?: string }[] {
        return this.errors;
    }

    clearErrors() {
        this.errors = [];
    }
}

export const softAssertions = new SoftAssertions();
