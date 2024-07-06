export default function ToDoTotal({todos_completed, todos_total}){
    return (
        <section className="todototal_section">
            <div>
                <p className="text_large">
                    Tasks Done
                </p>
            </div>
            <div>
                {todos_completed}/{todos_total}
            </div>
        </section>
    );
}