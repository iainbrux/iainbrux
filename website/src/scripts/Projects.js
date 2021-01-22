export default class Project {
    constructor(img, name, source, livepage, desc) {
        this.img = img,
        this.name = name,
        this.source = source,
        this.livepage = livepage,
        this.desc = desc
    }

    getName() {
        return this.name
    }

    getSource() {
        return this.source
    }

    getLivepage() {
        return this.livepage
    }

    getDesc() {
        return this.desc
    }

}