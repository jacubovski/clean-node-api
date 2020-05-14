export interface LogErrorRepository {
  log (Stack: string): Promise<void>
}
