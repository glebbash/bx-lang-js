import { Parser } from "../parser"
import { Expr, Token } from "../tokenizer"
import { syntaxError } from "../utils/syntax-error"
import { ConstExpr } from "./const"
import { PrefixParser } from "./prefix-op"

export const PAREN_PARSER: PrefixParser = (parser: Parser, token: Token) => {
    const exprs = token.value as Expr[]
    if (exprs.length !== 1) {
        // TODO: should concat to one expr
        syntaxError("Multiple expressions in parentheses.", token.start)
    }
    if (exprs[0].length === 0) {
        return new ConstExpr(null)
    }
    return parser.parseSub(exprs[0])
}
