export class StorageUtil {
  public static save<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  public static extract<T>(key: string): T | undefined {
    const string_value = localStorage.getItem(key)

    if (!string_value) {
      return undefined
    }

    return JSON.parse(string_value) as T | undefined
  }

  public static delete(key: string) {
    localStorage.removeItem(key)
  }
}
