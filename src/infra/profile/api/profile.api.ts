import axios from "axios";

class ProfileApiService {
  private static instance: ProfileApiService;
  static get Instance(): ProfileApiService {
    return this.instance || (this.instance = new this());
  }

  async uploadFile(url: string, file: File): Promise<string> {
    const response = await axios.put(url, file);
    return response.data;
  }
}

export default ProfileApiService.Instance;
