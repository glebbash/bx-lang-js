import { Scope } from "../engine/scope"
import { Parser } from "../parser"
import { Expression } from "./expression"
import { IDENT_PARSER } from "./ident"
import { PrefixParser } from "./prefix-op"

export const LET_PARSER: PrefixParser<LetExpr> = (parser: Parser) => {
    const identExpr = IDENT_PARSER(parser, parser.next())
    parser.nextValue("=")
    return new LetExpr(identExpr.name, parser.parse())
}

export class LetExpr implements Expression {
    constructor(private name: string, private expr: Expression) {}

    eval(scope: Scope) {
        scope.define(this.name, this.expr.eval(scope))
        return null
    }

    print(): string {
        return `let ${this.name} = ${this.expr.print()}`
    }
}
