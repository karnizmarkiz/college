class Request {
    constructor() {
        this.csrf = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        this.post = this.post.bind(this);
    }

    post(url, data) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;',
                'X-CSRF-TOKEN': this.csrf
            },
            body: JSON.stringify(data)
        }).then(response => response.json());
    }
}

export const request = new Request();