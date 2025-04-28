export interface Instruction {
  step: number;
  display_text: string;

}
export interface More{
  thumbnail_url: string;
  instructions:Instruction [];
}
