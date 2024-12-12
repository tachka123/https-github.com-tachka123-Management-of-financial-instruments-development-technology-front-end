class LocalStorageUtil<T> {
  private key: string;

  constructor(key: string) {
    this.key = key;
  }
  getValue() {
    const value = localStorage.getItem(this.key);
    if (value) {
      return JSON.parse(value) as T;
    }
    return null;
  }
  setValue(value: T) {
    localStorage.setItem(this.key, JSON.stringify(value));
  }
  clearValue() {
    localStorage.removeItem(this.key);
  }
}

export default LocalStorageUtil;
